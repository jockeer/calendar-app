import moment from 'moment';
import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import '../../styles/modal.css'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now= moment().minutes(0).seconds(0).add(1,'hours')
const late= now.clone().add(1,'hours')

export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(late.toDate())
    const [titleValid, setTitleValid] = useState(true)

    const [formValues, setformValues] = useState({
        title:'Evento',
        notes:'',
        start: now.toDate(),
        end: late.toDate()
    })

    const { title, notes, start, end} = formValues

    const closeModal = () => {
        //TODO: Cerrar el modal
    
    }
    const handleStartDateChange = (e) => {
        setDateStart(e)
        setformValues({
            ...formValues,
            'start' : e
        })
    }
    const handleEndDateChange = (e) => {
        setDateEnd(e)
        setformValues({
            ...formValues,
            'end' : e
        })
    }

    const handleChange = (e) =>{
        setformValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const momentStart = moment(start)
        const momentEnd = moment(end)
        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error','La fecha fin debe ser mayor ala fecha de inicio','error')
        }
        if (title.trim().length < 2) {
            setTitleValid(false)
            return
        }
        //TODO: realizar grabacion en la BD
        setTitleValid(true)
        closeModal()
    }

    return (
        <Modal
            isOpen={true}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className='modal'
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker 
                        onChange={ handleStartDateChange }  
                        value={dateStart} 
                        className='form-control'
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker 
                        minDate={dateStart}
                    
                        onChange={ handleEndDateChange }  
                        value={dateEnd} 
                        className='form-control'
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={ handleChange }
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={ handleChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
                <br />
                
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </div>

            </form>
        </Modal>
     )
}