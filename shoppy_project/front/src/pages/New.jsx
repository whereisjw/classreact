import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const New = () => {
  const {register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  watch}=useForm({defaultValues: {
    image: '',
    name: '',
    price: '500000',
    info: '',
  },
})
/*   console.log(watch()); */
  const onValid =(data)=>{
console.log(data);
//post axios
axios.post(`http://127.0.0.1:8080/new`, data)
  .then(response => {
  if(response.data == 'ok'){
    alert('제품등록완료');
  }
  })
  .catch(error => {
    console.error(error);
  });

  }
  return (
    <div>
<form action="/new" method='post' onSubmit={handleSubmit(onValid)}>
  <fieldset>
    <legend>등록페이지</legend>
    <ul>
<li>
    <input {...register("image",{minLength:{value:10,message:"너무 짧습니다. 10글자 이상 입력해주세요"}}) } type="text" placeholder='이미지' />
</li>
<span className='imageError'>{errors?.image?.message ? errors.image.message : "이미지 url 을 입력해주세요"}</span>
<li>
    <input {...register("name",{minLength: {value:2, message:"2글자 이상 입력해주세요"}}) } type="text" placeholder='이름' />
</li>
<span>{errors?.name?.message ? errors.name.message : "이름을 입력해주세요"}</span>
 <li>
   <input {...register("price",{minLength: 4}) } type="number" placeholder='가격' />
 </li>
 <span>{errors?.price?.message ? errors.price.message : "가격을 입력해주세요"}</span>
<li>
    <input {...register("info",{minLength: 2}) } type="text" placeholder='인포' />
</li>
<span>{errors?.price?.message ? errors.price.message : "가격을 입력해주세요"}</span>
  </ul>
  <button type='submit'>등록하기</button>
  </fieldset>
</form>
    </div>
  )
}

export default New