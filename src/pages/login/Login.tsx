import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userService"
import useAuth from "../../hooks/useAuth";
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FormAlert from '../../components/FormAlert/FormAlert' 

type Props = {};

const LoginPage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState<any>({});

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //Form validation

    if ([email, password].includes("")) {
      console.log("there is some empty input");
      return;
    }

    //Validate with API
    await loginUser({
      password,
      email,
    })
      .then(async (response) => {
        const { user } = response;
        setAuth(user);
        setAlert({
          msg: "¡Bienvenido a Habit+!",
          isError: false,
        });
        setTimeout(() => {
          navigate("/");
        }, 4000);
      })
      .catch((error) => {
        console.log("Error when trying to login: ", error);
        setAlert({ msg: "Error de accesso", isError: true });
      });

    console.log("clickado");
  };

  const { msg } = alert;

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-[40%] md:mt-[10%]">
        <SectionTitle text="Iniciar sesión" />
        <div className="mx-14 flex justify-center max-w-7xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:mt-0 w-80">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="username"
                type="text"
                placeholder="email@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Contraseña"
              >
                Contraseña
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="password"
                type="password"
                placeholder="****************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-red hover:bg-green text-white py-2 px-20 w-80 rounded"
              >
                Iniciar sesión
              </button>
            </div>
            {msg && <FormAlert alert={alert} />}
          </form>
        </div>
        <div className="max-w-7xl mx-14 my-6 flex justify-center">
          <h2>
            ¿No estás registrado?{" "}
            <Link className="hover:text-green" to="/register">
              Regístrate
            </Link>
          </h2>
        </div>
      </section>
    </>
  );
};

export default LoginPage;