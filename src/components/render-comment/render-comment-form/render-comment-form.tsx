import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { fetchAddNewCommentAction } from '../../../store/api-action';
import { toast } from 'react-toastify';

type RenderCommentFormProps = {
  hotelId: number
};

const RenderCommentForm = ({ hotelId }: RenderCommentFormProps) => {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState({
    rating: 0,
    'comment': ''
  });

  const changeMessageValueHandler = (evt: ChangeEvent<(HTMLInputElement | HTMLTextAreaElement)>) => {
    const { name, value } = evt.target;
    setMessage({ ...message, [name]: value });
  };

  const starsButtonList = Array.from({ length: 5 }, (_, i) => {
    const key = Number(5 - i);
    return (
      <>
        <input className="form__rating-input visually-hidden"
          id={`${key}-stars`}
          type="radio"
          name="rating"
          value={`${key}`}
          onChange={changeMessageValueHandler}
          checked={message.rating === key}
        />
        <label className="reviews__rating-label form__rating-label" htmlFor={`${key}-stars`}>
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </>);
  });

  const sendMessage = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const result = await dispatch(fetchAddNewCommentAction([hotelId, message]));

      if (result.meta.requestStatus === 'rejected') {
        toast.error('Ошибка отправки комментария!');
      } else {
        // Успешное выполнение операции, можно что-то предпринять
      }

      setMessage({ rating: 0, comment: '' });

      const starInputs = document.querySelectorAll('.form__rating-input') as NodeListOf<HTMLInputElement>;
      starInputs.forEach((input) => {
        input.checked = false;
      });

    } catch (error) {
      toast.warn('Ошибка отправки комментария!');
    }
  };

  const formDisabled = () => {
    if (message.rating === 0 || (message.comment.length < 50 || message.comment.length > 400)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form className="reviews__form form" action="#" onSubmit={sendMessage} >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starsButtonList}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={message.comment}
        value={message.comment}
        onChange={changeMessageValueHandler}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
          stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formDisabled()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RenderCommentForm;
