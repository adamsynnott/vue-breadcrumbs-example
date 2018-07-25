import JacketContainer from '@/containers/JacketContainer';
import JacketProductList from '@/components/jacket/JacketProductList';
import JacketProductDetails from '@/components/jacket/JacketProductDetails';

export default ({
  path: '/jackets',
  props: true,
  component: JacketContainer,
  children: [
    {
      path: '',
      name: 'JacketProductList',
      props: true,
      component: JacketProductList,
      meta: {
        breadcrumb: {
          default: [
            { name: 'Home', link: 'HomePage' },
            { name: 'Jackets', link: 'JacketProductList', nonInteractive: true },
          ],
        },
      },
    },
    {
      path: ':jacketLabel',
      name: 'JacketProductDetails',
      props: true,
      component: JacketProductDetails,
      meta: {
        breadcrumb: {
          default: [
            { name: 'Home', link: 'HomePage' },
            { name: 'Jackets', link: 'JacketProductList' },
            { name: null, link: 'JacketProductDetails', paramToDisplay: 'jacketLabel', nonInteractive: true },
          ],
          fromSalesPage: [
            { name: 'Home', link: 'HomePage' },
            { name: 'Sale', link: 'SaleProductList' },
            { name: null, link: 'JacketProductDetails', paramToDisplay: 'jacketLabel', nonInteractive: true },
          ],
        },
      },
    },
  ],
});
