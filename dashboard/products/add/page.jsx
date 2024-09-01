import styles from '@/app/ui/dashboard/products/add/add.module.css'


const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <input type='text' placeholder='title' name='title' required></input>
            <select name='category' id='category'>
                <option value='general'>Choose a category</option>
                <option value='kitchen'>Kitchen</option>
                <option value='phone'>Phone</option>
                <option value='computer'>Computer</option>
            </select>
            <input type='number' placeholder='price' name='price' required/>
            <input type='number' placeholder='stock' name='stock' required/>
            <input type='text' placeholder='color' name='color' required/>
            <input type='text' placeholder='size' name='size' required/>

            <textarea name='desc' id='desc' rows="16" placeholder='Description'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage