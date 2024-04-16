import SerenityHubLogo from '@/app/ui/serenityhub-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Login',
};
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-wafer p-3 md:h-36">
          <div className="w-full">
            <SerenityHubLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}


