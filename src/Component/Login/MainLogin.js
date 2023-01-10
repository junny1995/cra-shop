import axios from "axios";
import { useState, useCallback } from "react";

function MainLogin() {
  // 이메일, 비밀번호 저장 State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일, 비밀번호 에러메시지 State
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 이메일 비밀번호 입력확인 State
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 이메일 관련 유효성 검사 및 이메일 저장
  const onChangeEmail = useCallback((e) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 확인해주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다!");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호 관련 유효성 검사 및 비밀번호 저장
  const onChangePassword = useCallback((e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("영문, 숫자 8자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다!");
      setIsPassword(true);
    }
  }, []);

  // 로그인 관련 Axios
  const PostLogin = async () => {
    try {
      const req = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlY7KchLUAdf1wFZ9clKbIEVV9xqTGfcE`,
        { email: email, password: password }
      );
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 mt-10 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            로그인
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">이메일</label>
            <input
              type="email"
              id="text"
              name="email"
              onChange={onChangeEmail}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {email.length > 0 && (
              <span
                className={`opacity-70 ${
                  isEmail ? "text-green-700" : "text-red-800"
                }`}
              >
                {emailMessage}
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChangePassword}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {password.length > 0 && (
              <span
                className={`opacity-70 ${
                  isPassword ? "text-green-700" : "text-red-800"
                }`}
              >
                {passwordMessage}
              </span>
            )}
          </div>
          <button
            onClick={PostLogin}
            className={`mt-5 ${
              !(isEmail && isPassword)
                ? "text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none rounded text-lg"
                : "text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            }`}
            disabled={!(isEmail && isPassword)}
          >
            로그인
          </button>
          <p className="text-xs font-medium mt-7 text-center">
            이메일, 비밀번호를 작성해야 버튼이 활성화 됩니다!
          </p>
          <button className="mt-5 text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none rounded text-sm">
            비밀번호 찾기
          </button>
          <button className="mt-5 text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none rounded text-sm">
            회원가입
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainLogin;