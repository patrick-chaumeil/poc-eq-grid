import { v4 } from "uuid";

const data = [
  {
    component: "formName",
    className: "eq-col-6",
    options: { label: "text 1", multiline: true }
  },
  {
    component: "paper",
    className: "eq-col-max",
    options: { label: "paper 2" },
    items: [
      {
        component: "text",
        className: "eq-col-2",
        options: { label: "text 1.1", multiline: false }
      },
      {
        component: "date",
        className: "eq-col-2",
        options: { label: "date 1.2", multiline: false }
      },
      {
        component: "text",
        className: "eq-col-2",
        options: { label: "text 1.3", multiline: false }
      },
      {
        component: "paper",
        className: "eq-col-max",
        items: [
          {
            component: "text",
            className: "eq-col-2",
            options: { label: "text 1.4.1", multiline: false }
          },
          {
            component: "date",
            className: "eq-col-2",
            options: { label: "date 1.4.2", multiline: false }
          }
        ]
      }
    ]
  },
  {
    component: "text",
    className: "eq-col-6",
    options: { label: "text 3", multiline: false }
  }
];

function addIdRec(d) {
  return d?.map(item => ({ ...item, id: v4(), items: addIdRec(item.items) }));
}

export default addIdRec(data);
