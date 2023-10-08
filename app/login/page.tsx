import {FacebookButton} from "@/components/FacebookButton";
import {GoogleButton} from "@/components/GoogleButton";
import SignUpForm from "@/components/SignUpForm";
import {TwitterButton} from "@/components/TwitterButton";
import './style.scss'
import Divider from "@/components/Divider";
import Link from "next/link";

export default function SignUp() {
  return (
    <main>
      <div className="container small">
        <div className="signup">
          <div className="signup__col">
            <h1>Create an account</h1>

            <div className="signup__signin">
              <span>Already have an account? </span>
              <Link href="/login">Log in</Link>
            </div>
            <div className="signup__social">
              <FacebookButton></FacebookButton>

              <GoogleButton></GoogleButton>
              
              <TwitterButton></TwitterButton>
            </div>
            <Divider text="Or" ></Divider>
            <SignUpForm></SignUpForm>
          </div>
          <div className="signup__img">
          </div>
        </div>
      </div>
    </main>
  )
}