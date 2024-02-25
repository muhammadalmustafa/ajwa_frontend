import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';

export default function RegisterPage() {
    const navigate = useNavigate();

    const handleRegisterSubmit = async (formData) => {
        try {
            // Your submission logic
             // try {
            // Adjust the endpoint as necessary
            const response = await axios.post('http://localhost:5000/register', formData);
            alert('Registration successful');
            // Optional: Redirect the user or clear form
          
            alert('Registration successful!');
            navigate('/dashboard'); // Navigate to another route on success
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <RegisterForm onSubmit={handleRegisterSubmit} />
        </div>
    );
}
