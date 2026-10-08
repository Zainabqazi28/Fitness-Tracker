
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        height: '',
        weight: ''
    });

    const [profilePicture, setProfilePicture] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    function handleFileChange(e) {
        setProfilePicture(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("name", user.name);
            formData.append("username", user.username);
            formData.append("email", user.email);
            formData.append("password", user.password);
            formData.append("age", user.age);
            formData.append("gender", user.gender);
            formData.append("height", user.height);
            formData.append("weight", user.weight);

            if (profilePicture) {
                formData.append("profilePicture", profilePicture);
            }

            const res = await axios.post(
                "http://localhost:7000/auth/api/register",
                formData
            );

            if (res.data.success) {
                console.log("User registered successfully");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <label>Name</label><br />
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={user.name}
                /><br />

                <label>Username</label><br />
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={user.username}
                /><br />

                <label>Email</label><br />
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                /><br />

                <label>Password</label><br />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                /><br />

                <label>Age</label><br />
                <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    value={user.age}
                /><br />

                <label>Gender</label><br />
                <select
                    name="gender"
                    onChange={handleChange}
                    value={user.gender}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br />

                <label>Height</label><br />
                <input
                    type="number"
                    name="height"
                    onChange={handleChange}
                    value={user.height}
                /><br />

                <label>Weight</label><br />
                <input
                    type="number"
                    name="weight"
                    onChange={handleChange}
                    value={user.weight}
                /><br />

                <label>Profile Picture</label><br />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                /><br />

                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;

