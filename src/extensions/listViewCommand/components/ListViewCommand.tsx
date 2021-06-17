import * as React from 'react';
import { ListViewCommandSetContext } from '@microsoft/sp-listview-extensibility';
import { Modal } from '@fluentui/react/lib/Modal';
export interface IListViewCommandProps {
  context: ListViewCommandSetContext
}

export const ListViewCommand: React.FunctionComponent<IListViewCommandProps> = (props: IListViewCommandProps) => {


  return (
    <>

      <div>{props.context.pageContext.listItem.id}</div>
      <div>{props.context.pageContext.list.title}</div>
    </>
  );
};