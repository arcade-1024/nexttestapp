import { useRouter } from "next/dist/client/router";
import React from "react";
import CenteredContainer from "../../../common/components/CenterContainer/CenterContainer";
import Input from "../../../common/components/Input/Input";

const LoginContainer = () => {
  const router = useRouter()
	return (
		<CenteredContainer heading="Login">
			<div className="divide-x">
				<Input />
				<button className="w-full btn" onClick={()=>router.push('/dashboard')}>
					Sign in
				</button>
			</div>
		</CenteredContainer>
	);
};

export default LoginContainer;
