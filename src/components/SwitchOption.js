import { useFormContext } from 'react-hook-form';

export const SwitchOption = (props) => {
  const { register } = useFormContext();
  const { labelLeft = null, labelRight = null, id = null, highlightSelection = null } = props;

  return (
    <div className="flex">
      {labelLeft ? (
        <span className="mr-3 text-sm font-medium text-gray-300">{labelLeft}</span>
      ) : null}
      <label
        htmlFor={`${id}-toggle`}
        className="inline-flex relative items-center mb-4 cursor-pointer"
      >
        <input
          {...register(`settings.${id}`)}
          type="checkbox"
          value=""
          id={`${id}-toggle`}
          className="sr-only peer"
        />
        <div
          className={`w-11 h-6 bg-gray-700 rounded-full 
peer peer-focus:ring-blue-800 peer-checked:after:translate-x-full
 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px]
   ${highlightSelection ? 'peer-checked:bg-gray-600' : null} 'after:border-gray-300'
 after:border after:rounded-full after:h-5 after:w-5 
 after:transition-all border-gray-600 `}
        ></div>
      </label>
      <span className="ml-3 text-sm font-medium text-gray-300">{labelRight}</span>
    </div>
  );
};
