import { useState } from 'react';
import blackHoleImg from '../../assets/blackHole.jpg';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (data: { token: string; student: any }) => void;
}

interface LoginResponse {
  token: string;
  student: any; // Replace 'any' with your actual student type if available
  message?: string;
}

interface SignupResponse {
  message?: string;
  error?: {
    issues?: { path: string[]; message: string }[];
  };
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phNumber, setPhNumber] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [exam, setExam] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Reset previous errors

    const baseUrl = "http://localhost:5000/api";

    if (isLogin) {
      try {
        const response = await fetch(`${baseUrl}/student/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data: LoginResponse = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("student", JSON.stringify(data.student));
          onLoginSuccess(data);
        } else {
          if (data.message?.includes("password")) {
            setErrors({ password: data.message });
          } else if (data.message?.includes("User")) {
            setErrors({ email: data.message });
          } else {
            setErrors({ general: data.message || "Login failed." });
          }
        }
      } catch (err) {
        setErrors({ general: "An error occurred during login." });
      }
    } else {
      const signupData = { name, email, password, phNumber, classLevel: Number(classLevel), exam };

      try {
        const response = await fetch(`${baseUrl}/student/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(signupData),
        });

        const data: SignupResponse = await response.json();

        if (response.ok) {
          setIsLogin(true);
        } else {
          const newErrors: { [key: string]: string } = {};

          if (data?.error?.issues) {
            for (const issue of data.error.issues) {
              const path = issue.path[0];
              newErrors[path] = issue.message;
            }
          } else if (data.message?.includes("Email")) {
            newErrors["email"] = data.message;
          } else {
            newErrors["general"] = data.message || "Signup failed.";
          }

          setErrors(newErrors);
        }
      } catch (err) {
        setErrors({ general: "An error occurred during signup." });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">
      <div className="w-full max-w-5xl bg-[#1d1d1d] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative p-2">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl font-bold z-10">
          ✕
        </button>

        <div
          className="hidden lg:flex bg-cover rounded-2xl bg-center p-10 text-white flex flex-col justify-between"
          style={{ backgroundImage: `url(${blackHoleImg})` }}
        >
          <div className="text-white text-3xl font-bold">a.</div>
          <div className="mt-auto">
            <h2 className="text-3xl md:text-4xl font-light leading-snug">
              Where learning <br />
              meets <span className="font-bold">excellence.</span>
            </h2>
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center bg-[#1d1d1d] text-gray-200">
          <h2 className="text-2xl font-semibold mb-2 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p className="text-sm text-center mb-6">
            {isLogin ? 'Enter your credentials to access your account' : 'Fill in the details to create your account'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {!isLogin && (
              <>
                <div>
                  <label className="block mb-1 text-sm">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block mb-1 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    value={phNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhNumber(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Class Level</label>
                  <select
                    value={classLevel}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setClassLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  >
                    <option value="">Select</option>
                    <option value="6-10">Class 6-10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                  {errors.classLevel && <p className="text-red-500 text-xs mt-1">{errors.classLevel}</p>}
                </div>

                <div>
                  <label className="block mb-1 text-sm">Exam</label>
                  <select
                    value={exam}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setExam(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  >
                    <option value="">Select</option>
                    <option value="JEE Mains">JEE Mains</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="NEET">NEET</option>
                  </select>
                  {errors.exam && <p className="text-red-500 text-xs mt-1">{errors.exam}</p>}
                </div>
              </>
            )}

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                required
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {isLogin && (
              <div className="flex items-center space-x-2">
                <input id="remember" type="checkbox" className="accent-yellow-400" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

            {errors.general && <p className="text-red-500 text-center mt-2">{errors.general}</p>}

          </form>

          <p className="mt-4 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
              }}
              className="text-yellow-400 font-semibold underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
