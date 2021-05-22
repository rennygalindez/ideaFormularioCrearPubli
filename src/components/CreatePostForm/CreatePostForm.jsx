import useCreatePost from '../../hooks/useCreatePost';
import Form from '../Form/Form';


const formInputsConfig = [
  { label: 'Title', type: 'text', name: 'title' },
  { label: 'Price', type: 'number', name: 'price' },
  { label: 'Address', type: 'text', name: 'address' },
];

const CreatePostForm = () => {
  const { setCurrentComponent } = useCreatePost();

  return (
    <div>
      <h1>Tell me more about your property</h1>
      <Form config={formInputsConfig}>
      </Form>

      <div>
        <button
          onClick={() => {
            setCurrentComponent('SelectPlan');
          }}
        >
          Forward...
        </button>
        <button
          onClick={() => {
            setCurrentComponent('DetailsProperty');
          }}
        >
          Continue...
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
