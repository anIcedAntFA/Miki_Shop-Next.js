import { useRouter } from 'next/router';

const getRouter = () => {
  const router = useRouter();
  const { query } = router;
  const page = Number(query.page) >= 0 ? Number(query.page) : 0;
  const limit = Number(query.limit) >= 16 ? Number(query.limit) : 16;

  return {
    ...router,
    page,
    limit,
    query,
  };
};

export default getRouter;
