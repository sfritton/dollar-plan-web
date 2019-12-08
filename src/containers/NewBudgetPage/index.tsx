import React, { useEffect } from "react";
import { connect } from "react-redux";
import getBudgetsAction from "../../state/budgets/getBudgets";
import {
  getBudgetStatus,
  getBudgets,
  selectHasBudgets
} from "../../state/budgets/selectors";
import {
  AppState,
  MappedStateProps,
  Status,
  MappedDispatchProps
} from "../../state/types";

// import { createNewBudget, getBudget } from "Redux/budgets/actions";
// import { setBudgetPage, setEditing } from "Redux/ui/actions";
// import { Button, Dropdown, Page } from "Components";
// import { decodeDate, getMonthName, months } from "Util/date";

// const currentYear = new Date().getFullYear();
// const nextTenYears = new Array(10)
//   .fill(0)
//   .map((elem, i) => ({ value: i + currentYear, name: i + currentYear }));

// const FormSection = ({ children, invisible }) => (
//   <div className={`form-section ${invisible ? "form-section--invisible" : ""}`}>
//     {children}
//   </div>
// );

type StateProps = MappedStateProps<typeof mapStateToProps>;
type DispatchProps = MappedDispatchProps<typeof mapDispatchToProps>;

function NewBudgetPage(props: StateProps & DispatchProps) {
  const { status, getBudgets } = props;

  useEffect(() => {
    if (status === Status.INIT) getBudgets();
  }, [status, getBudgets]);

  return <div>Select a month and year</div>;
}

// class NewBudgetPageLegacy extends Component {
//   constructor(props) {
//     super(props);
//     const canCopy = props.budgetDates.length > 0;

//     this.state = {
//       month: months[0].value,
//       year: nextTenYears[0].value,
//       copyOldBudget: false,
//       canCopy,
//       oldDate: canCopy && props.budgetDates[0].value
//     };

//     this.createBudget = this.createBudget.bind(this);
//   }

//   createBudget() {
//     const { dispatch } = this.props;
//     const { month, year, copyOldBudget, oldDate } = this.state;

//     if (copyOldBudget) {
//       const decodedOldDate = decodeDate(oldDate);
//       dispatch(
//         createNewBudget(month, year, decodedOldDate.month, decodedOldDate.year)
//       );
//     } else {
//       dispatch(createNewBudget(month, year));
//     }

//     dispatch(setEditing(true));
//     dispatch(getBudget(month, year));
//     dispatch(setBudgetPage());
//   }

//   render() {
//     const { budgetDates } = this.props;

//     const { month, year, copyOldBudget, canCopy, oldDate } = this.state;

//     return (
//       <Page header={<h1>New budget</h1>}>
//         <section>
//           <FormSection>
//             Select a month and a year for the new budget
//           </FormSection>

//           <FormSection>
//             <Dropdown
//               options={months}
//               value={month}
//               onChange={m => this.setState({ month: parseInt(m) })}
//             />
//             <Dropdown
//               options={nextTenYears}
//               value={year}
//               onChange={y => this.setState({ year: parseInt(y) })}
//             />
//           </FormSection>

//           <FormSection invisible={!canCopy}>
//             <input
//               type="checkbox"
//               disabled={!canCopy}
//               onChange={() =>
//                 this.setState(prevState => ({
//                   copyOldBudget: !prevState.copyOldBudget
//                 }))}
//             />{" "}
//             Copy a previous budget
//           </FormSection>

//           <FormSection invisible={!copyOldBudget}>
//             <Dropdown
//               disabled={!copyOldBudget}
//               options={budgetDates}
//               value={oldDate.value}
//               onChange={date => this.setState({ oldDate: date })}
//             />
//           </FormSection>

//           <FormSection>
//             <Button onClick={this.createBudget}>Create budget</Button>
//           </FormSection>
//         </section>
//       </Page>
//     );
//   }
// }

const mapStateToProps = (state: AppState) => ({
  status: getBudgetStatus(state),
  budgets: getBudgets(state),
  hasBudgets: selectHasBudgets(state)
});

const mapDispatchToProps = {
  getBudgets: getBudgetsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBudgetPage);
