use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate(caseid: u64) -> Vec<(i32, i32)> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..100 {
        ret.push((rng.gen_range(1..101), rng.gen_range(1..101)));
    }
    ret.push((0, 0));
    ret
}

fn modelans(testcase: &Vec<(i32, i32)>) -> Vec<i32> {
    let mut ret = Vec::new();
    for (x, y) in testcase {
        if *x == 0 && *y == 0 {
            break;
        }
        ret.push(*x + *y);
    }
    ret
}

pub fn validate(testid: u64, ans: &str) -> bool {
    let testcase = generate(testid);
    let modelans = modelans(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        vans.push(line.parse::<i32>().unwrap());
    }
    vans == modelans
}
