import Link from "next/link";
import "./header.scss";

export default function Header() {
  const user = null;

  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link href="/">
          <h1>
            Edu<span>Notes</span>
          </h1>
        </Link>
      </div>
      <div className="links-wrapper">
        {!user && (
          <>
            <Link href="/login" className="link">
              Login
            </Link>
            <Link href="/register" className="link">
              Register
            </Link>
          </>
        )}
        <span className="link">Make a note</span>
      </div>
    </header>
  );
}
