import styled from 'styled-components';
import { VscGithubInverted } from 'react-icons/vsc';
import qs from 'querystringify';

export default function GitHubAuth({ loading, loadingSignIn }) {
  function redirectToGitHub() {
    const params = {
      response_type: 'code',
      scope: 'user',
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    };

    const queryStrings = qs.stringify(params);
    const authURL = `${process.env.REACT_APP_GITHUB_URL}?${queryStrings}`;
    window.location.href = authURL;
  }
  return (
    <Button onClick={() => redirectToGitHub()} disabled={loadingSignIn || loading}>
      <Icon>
        <VscGithubInverted />
      </Icon>
      Entrar com o Github
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  padding: 6px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 24px;
  margin-right: 10px;
`;
