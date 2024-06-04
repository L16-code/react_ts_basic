import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { login } from '../../actions/rootReducer';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { LoginAction } from '../../state_management/actions/AuthActions';
import { useDispatch } from 'react-redux';


// Define the validation schema
const schema = yup.object().shape({
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
    phone: yup.number().required('phone No. is required'),
    address: yup.string().required('address is required'),
    password: yup.string().required('Password is required'),
    email: yup.string().required('Email is required').email('Email is not valid'),
});

type DataValue = {
    firstname: string;
    lastname: string;
    phone: number;
    address: string;
    password: string;
    email: string;
};

const Login = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<DataValue>({
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const actions = bindActionCreators(
        {
            LoginAction
        },
        dispatch
    );

    const onSubmit = (data: DataValue) => {
        dispatch(LoginAction(data));
        // console.log(data);
        // dispatch(login(data));
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }} noValidate>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="firstname" style={{ display: 'block', marginBottom: '5px' }}>firstname</label>
                    <input
                        {...register('firstname')}
                        id="firstname"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errors.firstname && <p style={{ color: 'red', marginTop: '5px' }}>{errors.firstname.message}</p>}
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="lastname" style={{ display: 'block', marginBottom: '5px' }}>lastname</label>
                    <input
                        {...register('lastname')}
                        id="lastname"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errors.lastname && <p style={{ color: 'red', marginTop: '5px' }}>{errors.lastname.message}</p>}
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>phone</label>
                    <input
                        {...register('phone')}
                        id="phone"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errors.phone && <p style={{ color: 'red', marginTop: '5px' }}>{errors.phone.message}</p>}
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>address</label>
                    <input
                        {...register('address')}
                        id="address"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errors.address && <p style={{ color: 'red', marginTop: '5px' }}>{errors.address.message}</p>}
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errors.email && <p style={{ color: 'red', marginTop: '5px' }}>{errors.email.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        id="password"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errors.password && <p style={{ color: 'red', marginTop: '5px' }}>{errors.password.message}</p>}
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#556cd6', color: '#fff', border: 'none', borderRadius: '5px' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;


