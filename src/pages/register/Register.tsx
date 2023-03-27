import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormAlert from "../../components/FormAlert/FormAlert";
import { registerUser } from "../../services/userService";
import useAuth from "../../hooks/useAuth";

type Props = {};

const RegisterPage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [userId, setUserId] = useState("");

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

    //Form Validation

    if ([username, email, password, repassword].includes("")) {
      setAlert({ msg: "Algún campo está vacio", isError: true });
      console.log("Error 1");
      return;
    }

    if (password !== repassword) {
      setAlert({ msg: "Contraseña no coincide", isError: true });
      console.log("Error 2");
      return;
    }

    if (password.length < 8) {
      setAlert({ msg: "Contraseña demasiado corta", isError: true });
      console.log("Error 3");
      return;
    }

    if (username.length < 5) {
      setAlert({ msg: "Usuario demasiado corto", isError: true });
      console.log("Error 4");
      return;
    }

    // if (this.validator.fieldValid('email')) {
    //   setAlert({ msg: "Invalid Email format", isError: true });
    //   console.log("Error 5");
    //   return;
    // }

    // Create user with Api

    const newUser = { username, password, email, userId };
    console.log(newUser)
    await registerUser(newUser)
      .then(async (response) => {
        if (typeof response !== "undefined" && response.data._id) {
          console.log(
            "New user registered succesfully:",
            response,
            `561dda8b_5`
          );
          setUserId(response.data._id);
        }
      })
      .catch((error) => {
        console.log("Error when trying to create a new user: ", error);
      });

    setAlert({});
    navigate("/iniciar-sesion");
  };

  const { msg } = alert;

  return (
    <>
      <section className="flex flex-col justify-center items-center mb-36 ">
        <div className="bg-red md:bg-white px-10 py-8 flex  w-full">
          <h1 className="flex-1 w-64 text-white md:text-gray-dark font-bold text-2xl md:text-3xl text-center mb-4">
            Registro
          </h1>
        </div>
        <div className="mx-14 flex justify-center max-w-7xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 md:mt-0 w-80">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="usuario"
              >
                Usuario
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="usuario"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="email"
                type="email"
                placeholder="email@email.com"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contraseña"
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
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="repassword"
              >
                Vuelva a escribir la contraseña
              </label>
              <input
                onChange={(e) => setRepassword(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-light"
                id="repassword"
                type="contraseña"
                placeholder="****************"
              />
            </div>
            <p className="w-full my-6">
              Si hace click en el botón registrar, se considera que está de acuerdo con los
              {" "}
              <Link to="/">
                <strong>Términos de uso</strong>
              </Link>{" "}
              y{" "}
              <Link to="/">
                <strong>Políticas de Privacidad</strong>
              </Link>{" "}
              .
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-red hover:bg-green text-white py-2 px-24 rounded w-80"
              >
                Registrar
              </button>
            </div>
            {msg && <FormAlert alert={alert} />}
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
