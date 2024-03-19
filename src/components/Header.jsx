import { Link } from "react-router-dom"

export default function Header({logo, menu}) {
    const loginMenuButton = "text-sm bg-black text-white py-1 px-3 border border-black hover:bg-white hover:text-black hover:border-gray-300 duration-300 rounded-2xl"
    return (
        <header className="w-full flex justify-center">
            <div className="container-css flex justify-between">
                {/* 로고 */}
                <div className="text-xl">
                    {logo}
                </div>
                {/* 메인 메뉴 */}
                <nav>
                    <ul className="flex space-x-10">
                        <li>메뉴1</li>
                        <li>메뉴2</li>
                        <li>메뉴3</li>
                        <li>메뉴4</li>
                    </ul>
                </nav>
                {/* 로그인 메뉴 */}
                <div>
                    <ul className="flex space-x-1">
                        <li className={loginMenuButton}>로그인</li>
                        <Link to="/users/signup"><li className={loginMenuButton}>회원가입</li></Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}
