import React, { Component, Fragment } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from 'react-emotion';

const Container = posed.div({
  oneColumnLayout: {
    display: "flex",
  },
  twoColumnLayout: {
    display: "flex",
  },
  threeColumnLayout: {
    display: "flex",
  }
});

const SidebarPane = posed.div({
  oneColumnLayout: {
    x: -200,
    width: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  twoColumnLayout: {
    width: "150px",
    x: 0,   
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    } 
  },
  threeColumnLayout: {
    width: "150px",
    x: 0,    
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  }
});



const NoteListPane = posed.div({
  oneColumnLayout: {
    width: 0,
    x: -200,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  twoColumnLayout: {
    width: 88 + "vw",
    x: 0,
    transition: {
      default: {
        duration: 150
      }
    }
  },
  threeColumnLayout: {
    width: "250px",
    x: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  }
});



const EditorPane = posed.div({
  oneColumnLayout: {
    width: 100 + "vw",
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  twoColumnLayout: {
    width: 0,
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  },
  threeColumnLayout: {
    width: 68 + "vw",
    transition: {
      default: {
        duration: 150,
        ease:'linear'
      }
    }
  }
});

const StyledSidebarPane = styled(SidebarPane)`
  transition: all 0.3s linear
`;

const StyledNoteListPane = styled(NoteListPane)`
  transition: all 0.3s linear;
`;

const StyledEditorPane = styled(EditorPane)`
  transition: all 0.3s linear
`;

class Layout extends Component {
  static Sidebar = ({ children }) => <Fragment>{children}</Fragment>;
  static NoteList = ({ children }) => <Fragment>{children}</Fragment>;
  static Editor = ({ children }) => <Fragment>{children}</Fragment>;

  renderTypeOf = type => {
    const filteredComponents = React.Children.map(
      this.props.children,
      child => (child.type === type ? child : null)
    );
    return filteredComponents[0] ? filteredComponents[0] : null;
  };

  render() {
    const { columns } = this.props;
    let pose = "oneColumnLayout";
    if (columns === 2) {
      pose = "twoColumnLayout";
    }
    if (columns === 3) {
      pose = "threeColumnLayout";
    }
    return (
      <Container pose={pose}>
  <StyledSidebarPane key={1}>
  {this.renderTypeOf(Layout.Sidebar)}
  </StyledSidebarPane>
  <StyledNoteListPane key={2}>
  {this.renderTypeOf(Layout.NoteList)}
  </StyledNoteListPane>
  <StyledEditorPane key={3}>
  {this.renderTypeOf(Layout.Editor)}
  </StyledEditorPane>
  </Container>
      );
    }
  }
  
  export default Layout;
  
  /* <Container pose={pose}>
  <SidebarPane pose={pose} key={1}>
  {this.renderTypeOf(Layout.Sidebar)}
  </SidebarPane>
  <StyledNoteListPane pose={pose} key={2}>
  {this.renderTypeOf(Layout.NoteList)}
  </StyledNoteListPane>
  <EditorPane pose={pose} key={3}>
  {this.renderTypeOf(Layout.Editor)}
  </EditorPane>
  </Container> */
  /* <Container pose={pose}>
  {pose === 'twoColumnLayout' && (
    <React.Fragment>

     <SidebarPane key={1}>
     {this.renderTypeOf(Layout.Sidebar)}
   </SidebarPane> 

   <StyledNoteListPane key={2}>
      {this.renderTypeOf(Layout.NoteList)}
    </StyledNoteListPane>
    </React.Fragment>
  ) }
  {pose === 'oneColumnLayout' && (
    <EditorPane key={3}>
    {this.renderTypeOf(Layout.Editor)}
  </EditorPane>
  )}
  {pose === 'threeColumnLayout' && (
    <React.Fragment>
    <SidebarPane key={1}>
    {this.renderTypeOf(Layout.Sidebar)}
  </SidebarPane> 
  <StyledNoteListPane key={2}>
     {this.renderTypeOf(Layout.NoteList)}
   </StyledNoteListPane>
   <EditorPane key={3}>
    {this.renderTypeOf(Layout.Editor)}
  </EditorPane>
  </React.Fragment>
  )}
  </Container> */