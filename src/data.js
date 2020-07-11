import { nanoid } from "@reduxjs/toolkit";

const data = [
  {
    component: "formName",
    layout: { eqCol: 6 },
    options: { label: "text 1", multiline: true }
  },
  {
    component: "paper",
    layout: { eqCol: "max" },
    options: { label: "Paper 1" },
    items: [
      {
        component: "text",
        layout: { eqCol: 2 },
        options: { label: "text 1.1", multiline: false }
      },
      {
        component: "date",
        layout: { eqCol: 2 },
        options: { label: "date 1.2", multiline: false }
      },
      {
        component: "text",
        layout: { eqCol: 2 },
        options: { label: "text 1.3", multiline: false }
      },
      {
        component: "paper",
        layout: { eqCol: "max" },
        options: { label: "Paper 2" },
        items: [
          {
            component: "text",
            layout: { eqCol: 2 },
            options: { label: "text 1.4.1", multiline: false }
          },
          {
            component: "date",
            layout: { eqCol: 2 },
            options: { label: "date 1.4.2", multiline: false }
          }
        ]
      }
    ]
  },
  {
    component: "text",
    layout: { eqCol: 6 },
    options: { label: "text 3", multiline: false }
  }
];

function addIdRec(d) {
  return d?.map(item => ({
    ...item,
    id: nanoid(),
    items: addIdRec(item.items)
  }));
}

export default addIdRec(data);
