import React from 'react';

import { BaseLayout, SEO } from '@/layouts';

const NotFoundPage: React.FC = () => (
  <BaseLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BaseLayout>
);

export default NotFoundPage;
