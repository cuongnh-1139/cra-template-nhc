import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NotFoundPageWrapper } from './style';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('common.notFound404')}</title>
      </Helmet>
      <NotFoundPageWrapper>{t('common.notFound404')}</NotFoundPageWrapper>
    </>
  );
}

export default NotFoundPage;
