import { useForm } from "react-hook-form";
import Header from "./components/Header";
import Input from "./components/Input";
import { serverTest } from "./api";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { mutate } = useMutation(serverTest);
    const onValid = (formData) => {
        console.log(formData);
        mutate(formData);
    }
    return (
        <>
        <Header logo="LOGO" />
        {/* 로그인 */}
        <main className="w-full h-[calc(100vh-62px)] flex justify-center items-center">
            <section className="container-css flex flex-col justify-center items-center">
                {/* 로고 부분 */}
                <div>
                    <div className="py-4">LOGO</div>
                </div>
                <form onSubmit={handleSubmit(onValid)} className="w-full max-w-80">
                    {/* 로그인 인풋 */}
                    <Input type="text" name="id" placeholder="아이디를 입력해 주세요." 
                    register={register} 
                    option={{
                        required: "아이디를 입력해 주세요."}
                    }
                    errors={errors?.id?.message}
                    />
                    {/* 비밀번호 인풋 */}
                    <Input type="password" name="password" placeholder="비밀번호를 입력해 주세요." 
                    register={register} 
                    option={{
                        required: "비밀번호를 입력해 주세요."}
                    }
                    errors={errors?.password?.message}
                    />
                    {/* 아이디, 비밀번호 찾기 메뉴 */}
                    <div className="w-full flex justify-end">
                        <ul className="flex space-x-2 pt-2 text-sm text-[#AAABA8]">
                            <li>아이디 찾기</li>
                            <li>비밀번호 찾기</li>
                        </ul>
                    </div>
                    {/* 버튼 */}
                    <button type="submit"
                    className="w-full py-2 bg-[#036280] text-white mt-4 rounded-3xl">로그인</button>
                    {/* 회원가입 이동 */}
                    <div className="w-full text-center py-2">
                        <span className="text-sm">아직 회원이 아니신가요? <Link to="/users/signup"><b className="text-[#81BECE]">회원가입</b></Link>하기</span>
                    </div>
                </form>
            </section>
        </main>
        </>
    )
}
