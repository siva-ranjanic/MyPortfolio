import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">404</h1>
            <p className="text-xl text-gray-600">Page Not Found</p>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
