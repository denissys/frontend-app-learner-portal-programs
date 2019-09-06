// import qs from 'query-string';

import enterpriseCourseEnrollment from './__mocks__/enterpriseCourseEnrollment.json';

// eslint-disable-next-line import/prefer-default-export
export const markCourseAsCompleteRequest = (options) => {
  // const endpoint = '/enterprise_learner_portal/api/v1/enterprise_course_enrollments/';
  // let url = `${process.env.LMS_BASE_URL}${endpoint}`;
  // if (options) {
  //   url += `?${qs.stringify(options)}`;
  // }
  // Temporarily mock out API response
  const promise = new Promise((resolve) => {
    const { course_id: courseId } = options;
    const response = { ...enterpriseCourseEnrollment };
    response.data.course_run_id = courseId;
    setTimeout(() => {
      resolve(response);
    }, 1200);
  });
  return promise;
};