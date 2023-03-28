const FormAlert = ({ alert }: any) => {
  return (
    <div
      className={`${
        alert.isError ? "bg-red" : "bg-red"
      } px-4 py-3 rounded relative mt-3 text-white text-center`}
      role="alert"
    >
      {alert.msg}
    </div>
  );
};

export default FormAlert;
