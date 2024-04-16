import { Metadata } from 'next';
import RegisterForm from '../ui/register-form';
import SerenityHubLogo from '@/app/ui/serenityhub-logo';

export const metadata: Metadata = {
  title: 'Register',
};
export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-wafer p-3 md:h-36">
          <div className="w-full">
            <SerenityHubLogo />
          </div>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}