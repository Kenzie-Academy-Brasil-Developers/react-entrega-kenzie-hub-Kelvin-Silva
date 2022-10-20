import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ITechContext, TechContext } from '../../contexts/TechContext';
import { ButtonsStyled } from '../../styles/buttons';
import { FormStyled } from '../../styles/form';
import { schemaAddTec } from '../../validations/registerUser';
import { Modal } from './style';
import { IShowModal } from '../../pages/home';
import { ITechs } from '../../contexts/UserContext';

const AddModal = ({ setShowModal }: IShowModal) => {
  const modalRef = useOutsideClick(() => {
    setShowModal(false);
  });

  const { newTech } = useContext<ITechContext>(TechContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITechs>({
    resolver: yupResolver(schemaAddTec),
  });

  return (
    <Modal>
      <div className='overlay'>
        <div className='box' ref={modalRef}>
          <div className='title__box'>
            <h2>Cadastrar Tecnologia</h2>
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </button>
          </div>

          <FormStyled onSubmit={handleSubmit(newTech)}>
            <label htmlFor='tech'>Nome do projeto</label>
            <input
              id='tech'
              type='text'
              placeholder='Digite o nome do projeto'
              {...register('title')}
            />
            <span className='error__name'>{errors.text?.message}</span>
            <label htmlFor='status'>Status</label>
            <select id='status' {...register('status')}>
              <option value='Iniciante'>Iniciante</option>
              <option value='Intermediário'>Intermediário</option>
              <option value='Avançado'>Avançado</option>
            </select>
            <span className='error__name'>{errors.status?.message}</span>
            <ButtonsStyled>Cadastrar Tecnologia</ButtonsStyled>
          </FormStyled>
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
