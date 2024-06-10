import React from 'react';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted');

    const formData = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    };

    console.log('Form Data:', formData);

    fetch('/login', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          window.location.href = '/Home.html'
        } else {
          console.error('Error logging in:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Fetch Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'url(/raw.jpeg) no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', color: '#fff' }}>
      <div className="wrapper" style={{ width: '420px', background: 'transparent', color: '#fff', borderRadius: '10px', padding: '30px 40px', border: '2px solid rgba(36, 21, 21, 0.2)', backdropFilter: 'blur(20px)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <form onSubmit={handleSubmit} id="loginForm">
          <h1 style={{ fontSize: '36px', textAlign: 'center' }}>Login</h1>
          <div className="input-box" style={{ marginBottom: '20px' }}>
            <input type="text" name="username" placeholder="Username" style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', borderBottom: '2px solid rgba(255, 255, 255, .2)', borderRadius: '0', fontSize: '16px', color: '#fff', padding: '20px', boxSizing: 'border-box' }} required />
            <i className='bx bxs-user' style={{ color: '#fff', position: 'absolute', top: '20px', left: '20px' }}></i>
          </div>
          <div className="input-box" style={{ marginBottom: '20px' }}>
            <input type="password" name="password" placeholder="Password" style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', borderBottom: '2px solid rgba(255, 255, 255, .2)', borderRadius: '0', fontSize: '16px', color: '#fff', padding: '20px', boxSizing: 'border-box' }} required />
            <i className='bx bxs-lock-alt' style={{ color: '#fff', position: 'absolute', top: '20px', left: '20px' }}></i>
          </div>
          <div className="remember-forgot" style={{ marginBottom: '20px', fontSize: '14.5px' }}>
            <label style={{ color: '#fff' }}><input type="checkbox" style={{ marginRight: '5px' }} />Remember Password</label>
          </div>
          <button type="submit" className="btn" style={{ width: '100%', height: '45px', background: '#fff', border: 'none', outline: 'none', borderRadius: '40px', boxShadow: '0 0 10px rgba(0, 0, 0, .1)', cursor: 'pointer', fontSize: '16px', color: '#333', fontWeight: '600' }}>Login</button>
          <div className="register-link" style={{ marginTop: '20px', fontSize: '14.5px', textAlign: 'center' }}>
            <p>Don't have an Account? <a href="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
