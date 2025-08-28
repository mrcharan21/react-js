import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function LayoutWithLeftBoxes() {
  return (
    <Grid container spacing={2}>
      {/* Left Column (4/12) */}
      <Grid item xs={12} md={4}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <ComplexGrid title="Standard license" price="$19.00" />
          </Grid>
          <Grid item>
            <ComplexGrid title="Premium license" price="$29.00" />
          </Grid>
          <Grid item>
            <ComplexGrid title="Extended license" price="$39.00" />
          </Grid>
          <Grid item>
            <ComplexGrid title="Enterprise license" price="$59.00" />
          </Grid>
        </Grid>
      </Grid>

      {/* Right Column (8/12) */}
      <Grid item xs={12} md={8}>
        <Paper
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "grey.100",
            height: "100%",
          }}
        >
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eos libero iusto eveniet id voluptas, excepturi eaque quo, tenetur recusandae consequuntur itaque nemo temporibus maxime cum alias quas amet, eius minus distinctio quasi corrupti ullam adipisci quod! Suscipit ullam optio ducimus dignissimos accusamus perspiciatis aliquid odit blanditiis temporibus quos! Quis sit harum deserunt perspiciatis hic, nam iste vero libero, culpa, at ducimus illum laborum quo provident sint tempora dolor eum quod numquam maxime repellat! Repudiandae sed, iure eos odio, impedit laboriosam error quaerat similique ipsam, quod at explicabo optio nisi repellendus cum officiis blanditiis corrupti voluptate! Quibusdam ex tempora tenetur rem eos perferendis quo porro! Veritatis sunt iste error sequi facere laboriosam, doloribus soluta mollitia sapiente quis dignissimos quod numquam nemo rerum earum aut accusantium voluptates ipsa in quibusdam, harum aperiam. Corporis reiciendis accusantium itaque officia, minus harum velit laudantium doloremque labore tempora numquam animi nesciunt eligendi molestias eos impedit, excepturi ullam nam dolorem sint modi temporibus? Harum esse, id illum quibusdam tempora tenetur, voluptatibus distinctio maiores libero corporis pariatur quos incidunt ipsum laboriosam, consectetur asperiores vero ut eum illo iusto similique aliquid dolor odit dolorem? Voluptatem sunt id natus quos, veritatis autem corrupti magni excepturi in obcaecati numquam porro rem ratione a laborum sint? Reprehenderit consectetur consequatur et id incidunt distinctio quam dignissimos beatae reiciendis, neque eaque voluptates recusandae, nam at laudantium rerum quos iure quaerat natus similique praesentium laborum blanditiis tempore molestiae. Ipsum odio cupiditate vero totam nulla aperiam tempore at? Totam, ad nulla autem molestias voluptatem ipsum quos provident enim doloribus pariatur exercitationem quod ea harum! Quibusdam dolorum voluptatum illum amet fugiat impedit unde dolor fuga autem error consectetur consequuntur odit quidem dolorem ea, repellat voluptates enim tenetur exercitationem necessitatibus repellendus at perspiciatis adipisci illo! Qui incidunt molestiae iure deserunt? Iure illo eveniet maiores alias dolorem culpa necessitatibus quia adipisci fugit, omnis quo autem in. Culpa recusandae impedit ex alias voluptates. Nihil consequuntur praesentium eveniet atque excepturi repellat laborum aliquid quos in unde cum molestiae enim recusandae magni ducimus fugiat corrupti, pariatur reiciendis voluptates. Optio est dolorem blanditiis ad voluptas, dolor deleniti architecto quos alias, laborum, sapiente cum et rerum fuga suscipit cupiditate molestiae veniam eos quo unde ex quia mollitia praesentium? Modi sit harum est ipsam ullam atque? Exercitationem nemo est enim voluptates eveniet architecto accusamus, consequatur nulla distinctio tenetur saepe explicabo temporibus similique cumque reprehenderit eos recusandae, aperiam, quibusdam veniam officia. Dignissimos quod qui cumque.
        </Paper>
      </Grid>
    </Grid>
  );
}

function ComplexGrid({ title, price }) {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "#fff",
        ...theme.applyStyles?.("dark", {
          backgroundColor: "#1A2027",
        }),
      })}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={title} src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
