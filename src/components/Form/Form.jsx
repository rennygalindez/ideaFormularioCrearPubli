import useCreatePost from '../../hooks/useCreatePost';
import FormItem from './FormItem';
import Uploader from '../Uploader/Uploader';

const Form = ({ config }) => {
  const { postDetails, handleOnInputsChange } = useCreatePost();
const onChange
  return (
    <form>
      {config.map((inputConfig, key) => (
        <FormItem
          key={key}
          {...inputConfig}
          onChange={handleOnInputsChange}
          
          stateProperty={postDetails}
        />
      ))}
      <Uploader />
    </form>
  );
};

export default Form;
