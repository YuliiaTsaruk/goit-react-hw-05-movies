import { LineWave } from 'react-loader-spinner';

export const LoaderPage = () => {
  return (
    <LineWave
      visible={true}
      height="100"
      width="100"
      color="#0967f3"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};
