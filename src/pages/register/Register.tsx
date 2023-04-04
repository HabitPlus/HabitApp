import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormAlert from "../../components/FormAlert/FormAlert";
import { registerUser } from "../../services/userService";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/header/Header";

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
      setAlert({ msg: "Hay campos vacíos", isError: true });
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
      setAlert({ msg: "Nombre de usuario demasiado corto", isError: true });
      console.log("Error 4");
      return;
    }

    // Create user with Api

    const newUser = { username, password, email, userId };
    console.log(newUser)
    await registerUser(newUser)
      .then(async (response) => {
        if (typeof response !== "undefined" && response.data._id) {
          console.log(
            "New user registered succesfully: ",
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
    navigate("/inicio-sesion");
  };

  const { msg } = alert;

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center mt-[10%] md:mt-[2%] md:mb-[1%] scale-90 md:scale-100">
        <div className="bg-gray-light rounded-t-lg shadow-md px-4 py-8 flex w-80 h-12">
          <h1 className="flex-1 w-64 font-medium text-2xl md:text-3xl text-center">
            Registro
          </h1>
        </div>
        <div className="mx-14 flex justify-center max-w-7xl ">
          <form className="bg-gray-light shadow-md font-sans rounded-b-lg px-8 pt-6 pb-8 md:mt-0 w-80">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-1"
                htmlFor="Usuario">
                Usuario
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="bg-yellow-light border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm mb-1 font-sans"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-yellow-light border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email@email.com"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-sans mb-1"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-yellow-light border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-sans mb-1" htmlFor="repassword">Vuelva a escribir la contraseña</label>
              <input
                onChange={(e) => setRepassword(e.target.value)}
                className="bg-yellow-light border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="repassword"
                type="password"
                placeholder="*********" />
            </div>
            <p className="w-full my-6 font-sans text-sm">
              Si hace click en el botón registrarse, está de acuerdo con los
              {" "}
              <Link to="/">
                <strong>Términos de Uso</strong>
              </Link>{" "}
              y{" "}
              <Link to="/">
                <strong>Política de Privacidad</strong>
              </Link>{" "}
            </p>
            <div className="flex ">
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-orange hover:bg-red text-white py-2 px-24 rounded w-full items-center ">Registrarse
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
