import useCreatePost from '../../hooks/useCreatePost';
import SelectPlan from '../SelectPlan/SelectPlan';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
const CreatePost = () => {
  const { currentComponent } = useCreatePost();

  return (
    <div>
      {currentComponent === 'SelectPlan' && <SelectPlan />}
      {currentComponent === 'DetailsProperty' && <CreatePostForm />}
    </div>
  );
};

export default CreatePost;
