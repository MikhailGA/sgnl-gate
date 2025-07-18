import React from 'react';
import { TaskCard } from './TaskCard';
import { AppRoutes } from '@client/shared/config';

export function FolderTask() {
  return (
    <TaskCard
      title="Фильтрация папок по разрешениям"
      description="The task is to remove from the folder tree all nodes where the Permission property is false. However, if a node has an Permission property that is true, all of its parents and children should remain in the tree."
      route={AppRoutes.FOLDERS}
      buttonText="Перейти к папкам"
    />
  );
}
