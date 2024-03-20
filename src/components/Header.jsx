import { Link } from "react-router-dom"
import Logo from "./Logo"

export default function Header({logo}) {
    const loginMenuButton = "py-1 px-4 border border-[#036280] bg-[#036280] hover:bg-white hover:text-[#036280] duration-300 rounded-2xl text-sm text-white"
    return (
        <header className="w-full flex justify-center">
            <div className="container-css flex justify-between">
                {/* 로고 */}
                <Logo />
                {/* 메인 메뉴 */}
                <nav>
                    <ul className="flex space-x-10">
                        <Link to="/"><li>메뉴1</li></Link>
                        <Link to="/"><li>메뉴2</li></Link>
                        <Link to="/"><li>메뉴3</li></Link>
                        <Link to="/"><li>메뉴4</li></Link>
                    </ul>
                </nav>
                {/* 로그인 메뉴 */}
                <nav>
                    <ul className="flex space-x-2">
                        <Link to="/"><li className={loginMenuButton}>로그인</li></Link>
                        <Link to="/users/signup"><li className={loginMenuButton}>회원가입</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
