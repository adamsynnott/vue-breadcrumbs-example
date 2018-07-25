import JacketContainer from '@/containers/JacketContainer';
import SaleProductList from '@/components/sale/SaleProductList';

export default ({
  path: '/sale',
  props: true,
  component: JacketContainer,
  children: [
    {
      path: '',
      name: 'SaleProductList',
      props: true,
      component: SaleProductList,
      meta: {
        breadcrumb: {
          default: [
            { name: 'Home', link: 'HomePage' },
            { name: 'Sale', link: 'SaleProductList', nonInteractive: true },
          ],
        },
      },
    },
  ],
});
