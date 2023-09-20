import { AlertIcon, useDisclosure } from '@chakra-ui/react';
import {
  ProAccordion,
  ProAvatar,
  ProBreadcrumbs,
  ProButton,
  ProCard,
  ProCheckbox,
  ProDropdown,
  ProInput,
  ProModal,
  ProPopover,
  ProProgress,
  ProRadio,
  ProSwitch,
  ProTable,
  ProTooltip,
} from '@shared/components';
import { ColumnDef } from '@tanstack/react-table';
import { SidebarCtx } from '../contexts/sidebarContext/state';
import { useContext } from 'react';

interface TypeData {
  name: string;
  progress: number;
}

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  const { isOpenSidebar } = useContext(SidebarCtx);

  console.log(isOpenSidebar);

  const tableData: TypeData[] = [
    {
      name: 'Marketplace',
      progress: 75.5,
    },
    {
      name: 'Venus DB PRO',
      progress: 35.4,
    },
    {
      name: 'Venus DS',
      progress: 25,
    },
    {
      name: 'Venus 3D Asset',
      progress: 100,
    },
    {
      name: 'Marketplace',
      progress: 75.5,
    },
    {
      name: 'Marketplace',
      progress: 75.5,
    },
  ];

  const columns: ColumnDef<TypeData>[] = [
    {
      id: 'name',
      accessorKey: 'name',
      header: 'Name',
      cell: ({ getValue }) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {`${getValue()}`}
        </p>
      ),
    },
    {
      id: 'progress',
      accessorKey: 'progress',
      header: 'PROGRESS',
      cell: ({ getValue }) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {`${getValue()}`}
        </p>
      ),
    },
  ];

  return (
    <div className="flex justify-center">
      <ProTable columns={columns} data={tableData} />
    </div>
  );
}

export default Index;
