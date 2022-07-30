import Page from 'src/components/Page';
import MainLayout from 'src/layouts';
import LoginFormSection, {
  CircleDashIcon1,
  CircleDashIcon2,
  CircleDashIcon3,
  CircleIcon1,
  CircleIcon2,
  CircleIcon3,
} from 'src/sections/auth/login-form';

LoginPage.getLayout = (page) => <MainLayout variant="footer">{page}</MainLayout>;

export default function LoginPage() {
  return (
    <>
      <Page
        data={{
          title: 'Miki Shop',
          description: '',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <LoginFormSection />
      <CircleIcon1 />
      <CircleIcon2 />
      <CircleIcon3 />
      <CircleDashIcon1 />
      <CircleDashIcon2 />
      <CircleDashIcon3 />
    </>
  );
}
