import s from './CalculationForm.module.css'
import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"


export const CalculationForm = () => {
  const {register, setError, formState: {errors}, handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)


  return <div>
    <h2 className={s.title}>Расчет стоимости</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Количество взрослых:
        <input {...register("adultNumber", {required: "This is required.", min: {
          value: 1, message: 'Вы не можете выбрать меньше 1'
          }})} type='number' defaultValue={1}/>
        <ErrorMessage errors={errors} name="adultNumber"/>
      </label>

      {/*<select {...register("gender")}>*/}
      {/*  <option value="female">female</option>*/}
      {/*  <option value="male">male</option>*/}
      {/*  <option value="other">other</option>*/}
      {/*</select>*/}
      <input type="submit"/>
    </form>
  </div>
}

