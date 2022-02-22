import { FormEvent, SetStateAction } from 'react'
import { FiPlus } from 'react-icons/fi'
import * as S from './styles'

interface FormProps {
  handleAddTaskSubmit: (event: FormEvent) => void
  handleChangeInput: (event: {
    target: { value: SetStateAction<string> }
  }) => void
  input: string
}

const Form: React.FC<FormProps> = ({
  handleAddTaskSubmit,
  handleChangeInput,
  input
}) => {
  return (
    <S.Wrapper onSubmit={handleAddTaskSubmit}>
      <S.InputElement
        type="text"
        value={input}
        onChange={handleChangeInput}
        placeholder="Digite sua tarefa"
      />
      <S.ButtonSubmit data-testid="buttonSubmit" type="submit">
        <FiPlus size={25} color="#17181f" />
      </S.ButtonSubmit>
    </S.Wrapper>
  )
}

export default Form
