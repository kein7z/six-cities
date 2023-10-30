import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/get-comments-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import RenderCommentForm from './render-comment-form/render-comment-form';
import RenderListComments from './render-list-comments/render-list-comments';

const RenderComment = ({ hotelId }: { hotelId: number }) => {
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) => (<RenderListComments key={comment.id} commentProps={comment} />))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <RenderCommentForm hotelId={hotelId} />
        : null}
    </section>
  );
};

export default RenderComment;
