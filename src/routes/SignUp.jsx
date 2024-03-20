import { FaCheck } from "react-icons/fa6";
import Input from "../components/Input";
import Postcode from "../components/Postcode";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { serverTest } from "../api";
import Logo from "../components/Logo";
import { useState } from "react";
import Terms1 from "../components/Terms1";
import Terms2 from "../components/Terms2";

export default function SignUp() {
    const infoTitleCSS = "flex items-center pt-10 font-bold text-xl";
    // 이용약관 동의 관리
    const [agree_1, setAgree_1] = useState(false);
    const [agree_2, setAgree_2] = useState(false);
    const terms = (setAgree) => {
        setAgree(true);
    }
    // 폼 관리
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    const { mutate } = useMutation(serverTest);
    const onValid = (formData) => {
        console.log(formData);
        mutate(formData);
    }
    return (
        <main className="w-full flex justify-center">
            <section className="container-css flex flex-col justify-center items-center">
                {/* 로고 부분 */}
                <Logo />
                {/* 폼 부분 */}
                <form className="w-full max-w-80" onSubmit={handleSubmit(onValid)}>
                    {/* ★ 필수 정보 ★ */}
                    <div className="w-full">
                        <p className={`${infoTitleCSS} flex gap-1`}>필수 정보<FaCheck color="red"/></p>
                        <p className="text-[0.75rem] pb-4 text-blue-500">필수 정보 누락 시 회원가입이 완료되지 않습니다.</p>
                        {/* 아이디 */}
                        <Input type="text" name="userid" placeholder="영문 소문자, 숫자 조합의 8자리 이상 12자리 이하" 
                        register={register} 
                        option={{
                            required: "아이디를 입력해 주세요.",
                            minLength: {
                                value: 8,
                                message: "아이디는 최소 8자리 이상이어야 합니다."
                            },
                            maxLength: {
                                value: 12,
                                message: "아이디는 최대 12자리까지만 입력 가능합니다."
                            },pattern: {
                                value: /^[a-z\d]+$/,
                                message: "아이디 형식을 지켜주세요. (영문 소문자, 숫자 조합의 8자리 이상 12자리 이하)"
                            }}
                        }
                        errors={errors?.userid?.message}
                        label="아이디"
                        />
                        {/* 비밀번호 */}
                        <Input type="password" name="password" placeholder="영문, 숫자, 특수문자 조합의 8자리 이상 16자리 이하"
                        register={register} 
                        option={{
                            required: "비밀번호를 입력해 주세요.",
                            minLength: {
                                value: 8,
                                message: "비밀번호는 최소 8자리 이상이어야 합니다."
                            },
                            maxLength: {
                                value: 16,
                                message: "비밀번호는 최대 16자리까지만 입력 가능합니다."
                            },pattern: {
                                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
                                message: "비밀번호 형식을 지켜주세요. (영문, 숫자, 특수문자 조합 8자리 이상 16자리 이하)"
                            }}
                        }
                        errors={errors?.password?.message}
                        label="비밀번호"
                        />
                        {/* 비밀번호 확인 */}
                        <Input type="password" name="password_check" placeholder="비밀번호 확인을 입력해 주세요." 
                        register={register} 
                        option={{
                            required: '비밀번호 확인을 입력해 주세요.',
                            validate: (value, form) => {
                                return (
                                value === form.password || "비밀번호 확인은 비밀번호와 같아야 합니다."
                                );
                            }
                        }}
                        errors={errors?.password_check?.message}
                        label="비밀번호 확인"
                        />
                        {/* 이름 */}
                        <Input type="text" name="username" placeholder="이름을 입력해 주세요." 
                        register={register} 
                        option={{
                            required: "이름을 입력해 주세요."}
                        }
                        errors={errors?.username?.message}
                        label="이름"
                        />
                        {/* 이메일*/}
                        <Input type="text" name="email" placeholder="이메을 입력해 주세요." 
                        register={register} 
                        option={{
                            required: "이메일을 입력해 주세요.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "이메일 형식을 지켜주세요."
                            }}
                        }
                        errors={errors?.email?.message}
                        label="이메일"
                        />
                        {/* 휴대폰번호*/}
                        <Input type="text" name="mobile_tel" placeholder="휴대폰 번호를 입력해 주세요." 
                        register={register} 
                        option={{
                            required: "휴대폰 번호를 입력해 주세요.",
                            pattern: {
                                value: /^\d{3}-\d{3,4}-\d{4}$/,
                                message: "휴대폰 번호 형식을 지켜주세요."
                            }}
                        }
                        errors={errors?.mobile_tel?.message}
                        label="휴대폰 번호"
                        />
                        {/* 주소 */}
                        <div className="w-full flex justify-between items-center gap-2">
                            <Input type="text" name="address" placeholder="주소를 입력해 주세요."
                            register={register}
                            option={{
                                required: "주소를 입력해 주세요."}
                            }
                            errors={errors?.address?.message}
                            label="주소"
                            />
                            <Postcode setValue={setValue} />
                        </div>
                        {/* 상세주소 */}
                        <Input type="text" name="address_detail" placeholder="상세주소를 입력해 주세요."
                        register={register}
                        option={{
                            required: "상세 주소를 입력해 주세요."
                        }}
                        errors={errors?.address_detail?.message}/>
                    </div>
                    {/* ★ 추가 정보 ★ */}
                    <div className="w-full">
                        <p className={`${infoTitleCSS} pb-0`}>추가 정보</p>
                        <p className="text-[0.75rem] pb-4 text-blue-500">게시판을 이용하시려면 추가 정보를 입력해 주세요.</p>
                        {/* 사업자 번호 */}
                        <Input type="text" name="business_number" placeholder="사업자 번호를 입력해 주세요." label="사업자 번호"/>
                        <Input type="text" name="company" placeholder="회사명을 입력해 주세요." label="회사명"/>
                        <Input type="text" name="ceo_name" placeholder="대표자명을 입력해 주세요." label="대표자명"/>
                        <Input type="text" name="company_tel" placeholder="회사 번호를 입력해 주세요." label="회사 번호"/>
                        <Input type="text" name="company_fex" placeholder="회사 팩스 번호를 입력해 주세요." label="회사 팩스 번호"/>
                        <Input type="text" name="company_type" placeholder="업태를 입력해 주세요." label="업태"/>
                        <Input type="text" name="company_items" placeholder="종목를 입력해 주세요." label="종목"/>
                    </div>
                    {/* ★ 이용 약관 ★ */}
                    <div className="w-full pb-4 relative">
                        <p className={`${infoTitleCSS} flex gap-1`}>이용 약관<FaCheck color="red"/></p>
                        <div className="pt-2">
                            {/* 이용 약관 동의 */}
                            <div className="w-full flex justify-between">
                                <div className="flex space-x-1">
                                    <input type="checkbox" id="agree_1" name="agree_1" 
                                    {...register("agree_1", {
                                        required: "체크박스에 동의해주세요."
                                    })}
                                    />
                                    <label htmlFor="agree_1">[필수]이용 약관</label>
                                </div>
                                <p className="text-[#81BECE] cursor-pointer" onClick={() => terms(setAgree_1)}><b>보기</b></p>
                                {agree_1 ?
                                    <Terms1 setAgree={setAgree_1} />
                                : ""}
                            </div>
                            <span className="text-red-500 text-sm">{errors?.agree_1?.message}</span>
                            {/* 개인정보 수집 동의 */}
                            <div className="w-full flex justify-between">
                                <div className="flex space-x-1">
                                    <input type="checkbox" id="agree_2" name="agree_2" 
                                    {...register("agree_2", {
                                        required: "체크박스에 동의해주세요."
                                    })}/>
                                    <label htmlFor="agree_2">[필수]개인정보 수집 및 이용 동의</label>
                                </div>
                                <p className="text-[#81BECE] cursor-pointer" onClick={() => terms(setAgree_2)}><b>보기</b></p>
                                {agree_2 ?
                                    <Terms2 setAgree={setAgree_2} />
                                : ""}
                            </div>
                            <span className="text-red-500 text-sm">{errors?.agree_2?.message}</span>
                        </div>
                    </div>
                    {/* 버튼 */}
                    <button type="submit"
                    className="w-full py-2 rounded-3xl bg-[#036280] text-white mt-4">가입완료</button>
                    {/* 로그인 이동 */}
                    <div className="w-full text-center py-2">
                        <span className="text-sm">이미 회원시면 <Link to="/"><b className="text-[#81BECE]">로그인</b></Link>하기</span>
                    </div>
                </form>
            </section>
        </main>
    )
}