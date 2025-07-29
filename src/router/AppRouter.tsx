import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import NotFound from '../pages/NotFound';
import DetailedCourses from '../pages/DetailedCourse';
import EnrollCourses from '../pages/Enroll';
import ProfilePage from '../pages/Profile';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:exam" element={<Courses />} />
      <Route path="/courses/:exam/details" element={<DetailedCourses />} />
      <Route path="/enroll" element={<EnrollCourses />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
