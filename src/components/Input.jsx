import React from 'react';

export default function Input({label, type, name, placeholder, register, option, errors}) {
    const inputCSS = "w-full border-b border-gray-500";
    return (
        <div className="w-full pb-4">
            {label ? 
                <label className="text-gray-600" htmlFor={name}>{label}
                {label === "비밀번호" && 
                <span className="text-[0.75rem] text-blue-500"> 입력 가능한 특수문자 : !@#$%^&* </span>
                }
                </label> : ""
            }
            {register ? (
                <>  
                <input type={type} id={name} placeholder={placeholder} className={inputCSS} {...register(name, option)} readOnly={name === "address"}/>
                {errors && <span className="text-red-500 text-sm">{errors}</span>}
                </>
            ) : (
                <input type={type} placeholder={placeholder} name={name} className={inputCSS}/>
            )}
        </div>
    );
}