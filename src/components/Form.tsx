import React, { ChangeEvent, FormEvent } from "react";

interface FormProps {
  text: string;
  updateSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ text, updateSearch, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          className='search-input'
          value={text}
          onChange={updateSearch}
          placeholder='Search Here...'
        />
        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
